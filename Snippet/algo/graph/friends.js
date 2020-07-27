class Person {
  constructor(name) {
    this.name = name;
    this.friends = [];
    this.checked = false;
  }
  addFriend(friend) {
    this.friends.push(friend);
  }
  displayNetwork() {
    this.checked = true;
    // this.showFriends(this);
    this.showFriendLevels(this);
  }

  showFriends(node) {
    //DFS
    if (!node) {
      return null;
    }
    console.log(node.name);
    node.friends.forEach(friend => {
      if (!friend.checked) {
        friend.checked = true;
        this.showFriends(friend);
      }
    });
  }

  showFriendLevels(node) {
    //BFS
    let queue = [];
    queue.push(node);
    while (queue.length > 0) {
      let cur = queue.shift();
      //   console.log(cur.name);
      cur.friends.forEach(frnd => {
        if (!frnd.checked) {
          console.log(frnd.name);
          frnd.checked = true;
          queue.push(frnd);
        }
      });
    }
  }
}

(function() {
  const jane = new Person("Jane");
  const jack = new Person("Jack");
  const jon = new Person("Jon");
  const joe = new Person("Joe");
  const jake = new Person("Jake");
  const jim = new Person("Jim");

  jane.addFriend(jack);

  jack.addFriend(jane);
  jack.addFriend(jon);
  jack.addFriend(joe);

  jon.addFriend(jack);
  jon.addFriend(joe);
  jon.addFriend(jake);

  joe.addFriend(jack);
  joe.addFriend(jon);
  joe.addFriend(jake);

  jake.addFriend(joe);
  jake.addFriend(jon);
  jake.addFriend(jim);

  jim.addFriend(jake);

  jon.displayNetwork();
})();
