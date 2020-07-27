// Merge Two Sorted Lists
/**
 * 
 Input: 1->2->4, 1->3->4
 Output: 1->1->2->3->4->4
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// const ll = new ListNode(1);
// ll.next = new ListNode(2);
// ll.next.next = new ListNode(4);

// const ll2 = new ListNode(1);
// ll2.next = new ListNode(3);
// ll2.next.next = new ListNode(4);

const ll = new ListNode(-9);
ll.next = new ListNode(3);

const ll2 = new ListNode(5);
ll2.next = new ListNode(7);

var mergeTwoLists = function(l1, l2) {
  let cur, l3;
  if (!l1 && !l2) return null;
  if (l1 && !l2) return l1;
  if (!l1 && l2) return l2;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      if (cur) {
        cur.next = new ListNode(l1.val);
        cur = cur.next;
      } else {
        cur = new ListNode(l1.val);
        l3 = cur;
      }
      l1 = l1.next;
    } else {
      if (cur) {
        cur.next = new ListNode(l2.val);
        cur = cur.next;
      } else {
        cur = new ListNode(l2.val);
        l3 = cur;
      }
      l2 = l2.next;
    }
  }

  if (l1) {
    while (l1) {
      cur.next = new ListNode(l1.val);
      cur = cur.next;
      l1 = l1.next;
    }
  }
  if (l2) {
    while (l2) {
      cur.next = new ListNode(l2.val);
      cur = cur.next;
      l2 = l2.next;
    }
  }

  return l3;
};

console.log(mergeTwoLists(ll, ll2));
