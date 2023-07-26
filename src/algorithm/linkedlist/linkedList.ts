export class ListNode {
    constructor(
        public val: any, 
        public next: ListNode | null,
    ) {}
}

export function creatListFromArray(array: any[], pos?: number): ListNode | null {
    let posNode: ListNode | null = null;
    const head = array.reduceRight<ListNode | null>((node, val, idx) => {
        const listNode = new ListNode(val, node)
        if (idx === pos) posNode = listNode;
        return listNode;
    }, null);
    
    if (posNode) {
        let cur = head;
        while (cur && cur.next) {
            cur = cur.next;
        }
        cur!.next = posNode;
    }
    return head;
}

export function traverseList(head: ListNode | null) {
    if (head === null) console.log('null');
    while(head) {
        console.log(head.val);
        head = head.next;
    }
}
