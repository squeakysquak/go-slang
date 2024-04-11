import { heap_temp_node_stash, heap_temp_node_unstash } from "./heap";
import { Channel_alloc } from "./vmtypes/Channel";
import { Goroutine_push_os } from "./vmtypes/Goroutine";
import { Number_get } from "./vmtypes/Number";
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
];
export default builtins;
