function ListNode(val) {
  this.val = val;
  this.next = null;
}

const ll = new ListNode(1);
ll.next = new ListNode(4);
ll.next.next = new ListNode(5);

const ll2 = new ListNode(1);
ll2.next = new ListNode(3);
ll2.next.next = new ListNode(4);

const ll3 = new ListNode(2);
ll3.next = new ListNode(6);

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

var mergeKLists = function(lists) {
  if (lists.length === 0) return null;
  let res;
  (function mergeRecur(lists) {
    if (lists.length === 1) {
      res = lists[0];
      return;
    }
    let count = 0;
    const mergedArr = [];
    while (count < lists.length) {
      mergedArr.push(mergeTwoLists(lists[count], lists[count + 1]));
      count += 2;
    }
    mergeRecur(mergedArr);
  })(lists);
  return res;
};

console.log(mergeKLists([ll, ll2, ll3]));
console.log(mergeKLists([]));
