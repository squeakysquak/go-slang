import { heap_temp_node_stash, heap_temp_node_unstash } from "./heap";
import { Array_alloc, Array_get, Array_set } from "./vmtypes/Array";
import { Channel_alloc, Channel_close, Channel_is_alive, Channel_try_recv, Channel_try_send } from "./vmtypes/Channel";
import { Goroutine_push_os } from "./vmtypes/Goroutine";
import { Number_alloc, Number_get } from "./vmtypes/Number";
import { Reference_alloc, Reference_get } from "./vmtypes/Reference";

export const builtins: [string, (gor: number, num_args: number, args: number[]) => void][] = [
    ["make", (gor: number, num_args: number, args: number[]) => { // only makes channels; TODO: support other types
        let num_slots = 0;
        if (num_args >= 1) {
            num_slots = Number_get(Reference_get(args[0]));
        }
        const chan = Channel_alloc(num_slots);
        heap_temp_node_stash(chan);
        const ref = Reference_alloc(chan);
        heap_temp_node_stash(ref);
        Goroutine_push_os(gor, ref);
        heap_temp_node_unstash(); // ref
        heap_temp_node_unstash(); // chan
    }],
    ["close", (gor: number, num_args: number, args: number[]) => { // close chan
        if (num_args != 1) throw Error("close takes 1 argument");
        const chan = Reference_get(args[0]);
        Channel_close(chan);
        const ref = Reference_alloc(-1);
        heap_temp_node_stash(ref);
        Goroutine_push_os(gor, ref); // push something to be popped
        heap_temp_node_unstash(); // ref
    }],
    ["makeMutex", (gor: number, num_args: number, args: number[]) => { // mutex is a channel with 1 slot
        const chan = Channel_alloc(1);
        heap_temp_node_stash(chan);
        const ref = Reference_alloc(chan);
        heap_temp_node_stash(ref);
        Goroutine_push_os(gor, ref);
        heap_temp_node_unstash(); // ref
        heap_temp_node_unstash(); // chan
    }],
    ["lockMutex", (gor: number, num_args: number, args: number[]) => { // put item in chan
        if (num_args != 1) throw Error("lockMutex takes 1 argument");
        const chan = Reference_get(args[0]);
        const ref = Reference_alloc(-1);
        heap_temp_node_stash(ref);
        Channel_try_send(chan, gor, ref);
        Goroutine_push_os(gor, ref); // push something to be popped
        heap_temp_node_unstash(); // ref
    }],
    ["unlockMutex", (gor: number, num_args: number, args: number[]) => { // retrieve item from chan
        if (num_args != 1) throw Error("unlockMutex takes 1 argument");
        const chan = Reference_get(args[0]);
        Channel_try_recv(chan, gor);
        const ref = Reference_alloc(-1);
        heap_temp_node_stash(ref);
        Goroutine_push_os(gor, ref); // push something to be popped
        heap_temp_node_unstash(); // ref
    }],
    ["makeWaitgroup", (gor: number, num_args: number, args: number[]) => { // waitgroup is a channel and a number
        const chan = Channel_alloc(1);
        heap_temp_node_stash(chan);
        const num = Number_alloc(0);
        heap_temp_node_stash(num);
        const arr = Array_alloc(2);
        heap_temp_node_stash(arr);
        Array_set(arr, 0, chan);
        Array_set(arr, 1, num);
        const ref = Reference_alloc(arr);
        heap_temp_node_stash(ref);
        Goroutine_push_os(gor, ref);
        heap_temp_node_unstash(); // ref
        heap_temp_node_unstash(); // arr
        heap_temp_node_unstash(); // num
        heap_temp_node_unstash(); // chan
    }],
    ["waitgroupAdd", (gor: number, num_args: number, args: number[]) => { // increment num
        if (num_args != 2) throw Error("waitgroupAdd takes 2 arguments");
        const arr = Reference_get(args[0]);
        const chan = Array_get(arr, 0);
        if (!Channel_is_alive(chan)) {
            throw Error("waitgroup is already done");
        }
        const num = Number_get(Reference_get(args[1]));
        const oldnum = Number_get(Array_get(arr, 1));
        const newnum = Number_alloc(oldnum + num);
        Array_set(arr, 1, newnum);
        const ref = Reference_alloc(-1);
        heap_temp_node_stash(ref);
        Goroutine_push_os(gor, ref); // push something to be popped
        heap_temp_node_unstash(); // ref
    }],
    ["waitgroupDone", (gor: number, num_args: number, args: number[]) => { // decrement num
        if (num_args != 1) throw Error("waitgroupDone takes 1 argument");
        const arr = Reference_get(args[0]);
        const oldnum = Number_get(Array_get(arr, 1));
        const newnum = Number_alloc(oldnum - 1);
        Array_set(arr, 1, newnum);
        if (oldnum == 1) {
            const chan = Array_get(arr, 0);
            Channel_close(chan);
        }
        const ref = Reference_alloc(-1);
        heap_temp_node_stash(ref);
        Goroutine_push_os(gor, ref); // push something to be popped
        heap_temp_node_unstash(); // ref
    }],
    ["waitgroupWait", (gor: number, num_args: number, args: number[]) => { // wait on channel
        if (num_args != 1) throw Error("waitgroupWait takes 1 argument");
        const arr = Reference_get(args[0]);
        const chan = Array_get(arr, 0);
        Channel_try_recv(chan, gor); // chan already pushes something
    }],
];
export default builtins;
