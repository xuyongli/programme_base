// 单链表反转
// 给出一个单链表，要求反转链表，得到新的链表

import { ListNode, creatListFromArray, traverseList } from "./linkedList";

function reverseList(head: ListNode | null) {
    let prev = null;
    let next = null;
    let cur = head;
    while(cur) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}

const head = creatListFromArray([1, 2, 3, 4, 5]);
traverseList(reverseList(head));
// 5
// 4
// 3
// 2
// 1