class Directory {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.subdir = type === "folder" ? [] : null;
  }
}

class FileSystem {
  constructor() {
    this.root = new Directory("/", "folder");
  }
  addDir(name, type, parent) {
    var newDir = new Directory(name, type);
    if (!parent) {
      this.root.subdir.push(newDir);
      return;
    }
    var curr = this.searchDir(this.root, parent);
    console.log(curr);
    if (curr) {
      console.log("Pushing " + name + " into " + curr.name);
      curr.subdir.push(newDir);
    }
  }
  searchDir(cur, name) {
    //var cur = this.root;
    if (!cur.subdir) {
      return null;
    }
    if (cur.name === name) {
      console.log("returning " + name);
      return cur;
    } else {
      console.log(name, cur.name);
      cur.subdir.forEach(element => {
        this.searchDir(element, name);
      });
    }
  }
  displayDir(cur) {
    //var cur = this.root;
    if (!cur) {
      return null;
    }
    console.log(cur.name);
    cur.subdir.forEach(element => {
      this.displayDir(element, name);
    });
  }
}

var fs = new FileSystem();
fs.addDir("photos", "folder");
fs.addDir("songs", "folder");
fs.addDir("movies", "folder");
fs.addDir("kill bill", "file", "movies");
fs.addDir("Pulp Fiction", "file", "movies");
fs.addDir("Reservoir Dogs", "file", "movies");

// fs.displayDir();
