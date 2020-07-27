function ListNode(val) {
  this.val = val;
  this.next = null;
}

const ll = new ListNode(10);
ll.next = new ListNode(20);
ll.next.next = new ListNode(30);
ll.next.next.next = new ListNode(40);
ll.next.next.next.next = new ListNode(50);

console.log(ll);

var removeNthFromEnd = function(head, n) {
  if (!head.next) return null;
  let slow = head;
  let fast = head;
  while (n > 0) {
    fast = fast.next;
    n--;
  }
  let prev = null;
  if (!fast) return head.next;
  while (fast) {
    prev = slow;
    slow = slow.next;
    fast = fast.next;
  }
  prev.next = slow.next;

  return head;
};

console.log(removeNthFromEnd(ll, 3));
