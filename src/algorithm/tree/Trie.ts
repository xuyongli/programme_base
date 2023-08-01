/*
208. 实现 Trie (前缀树)
Trie（发音类似 "try"）或者说 前缀树 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补完和拼写检查。

请你实现 Trie 类：

Trie() 初始化前缀树对象。
void insert(String word) 向前缀树中插入字符串 word 。
boolean search(String word) 如果字符串 word 在前缀树中，返回 true（即，在检索之前已经插入）；否则，返回 false 。
boolean startsWith(String prefix) 如果之前已经插入的字符串 word 的前缀之一为 prefix ，返回 true ；否则，返回 false 。
*/

class TreeNode {
    public isEnd: boolean = false;
    constructor(
        private map: Map<string, TreeNode> = new Map(),
    ) {}

    public get(key: string): TreeNode | null {
        if (this.map.has(key)) {
            return this.map.get(key)!;
        }
        return null;
    }

    public has(key: string): boolean {
        return this.map.has(key);
    }

    public set(key: string, node: TreeNode) {
        this.map.set(key, node);
    }
}

class Trie {
    private node: TreeNode = new TreeNode();

    public insert(word: string) {
        let node = this.node;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!node.has(char)) {
                node.set(char, new TreeNode());
            }
            node = node.get(char)!;
        }
        node.isEnd = true;
    }

    public search(word: string): boolean {
        let node = this.node;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!node.has(char)) {
                return false;
            }
            node = node.get(char)!;
        }
        return node.isEnd;
    }

    public startsWith(prefix: string): boolean {
        let node = this.node;
        for (let i = 0; i < prefix.length; i++) {
            const char = prefix[i];
            if (!node.has(char)) {
                return false;
            }
            node = node.get(char)!;
        }
        return true;
    }
}

const trie = new Trie();
trie.insert('apple');
console.log(trie.search('apple')); 
// true
console.log(trie.search('app'));
// false
console.log(trie.startsWith('app'));
// true
trie.insert('app');
console.log(trie.search('app'));
// true
