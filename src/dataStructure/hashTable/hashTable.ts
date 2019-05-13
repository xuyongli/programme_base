// Hash table size directly affects on the number of collisions.
// The bigger the hash table size the less collisions you'll get.
// For demonstrating purposes hash table size is small to show how collisions
// are being handled.
const defaultHashTableSize = 32

interface Bucket {
  [key: string]: any
}

class HashTable {
  public buckets: Bucket[]
  public keys: {
    [key: string]: number
  }

  /**
   * @param {number} hashTableSize
   */
  constructor(hashTableSize = defaultHashTableSize) {
    // Create hash table of certain size and fill each bucket with empty linked list.
    this.buckets = Array(hashTableSize).fill({})

    // Just to keep track of all actual keys in a fast way.
    this.keys = {}
  }

  /**
   * Converts key string to hash number.
   *
   * @param {string} key
   * @return {number}
   */
  private hash(key: string): number {
    // For simplicity reasons we will just use character codes sum of all characters of the key
    // to calculate the hash.
    //
    // But you may also use more sophisticated approaches like polynomial string hash to reduce the
    // number of collisions:
    //
    // hash = charCodeAt(0) * PRIME^(n-1) + charCodeAt(1) * PRIME^(n-2) + ... + charCodeAt(n-1)
    //
    // where charCodeAt(i) is the i-th character code of the key, n is the length of the key and
    // PRIME is just any prime number like 31.
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
      0,
    )

    // Reduce hash number so it would fit hash table size.
    return hash % this.buckets.length
  }

  /**
   * @param {string} key
   * @param {*} value
   */
  public set(key: string, value: any): void {
    const keyHash = this.hash(key)
    this.keys[key] = keyHash
    const bucket = this.buckets[keyHash]
    bucket[key] = value
  }

  /**
   * @param {string} key
   * @return {*}
   */
  public delete(key: string): any {
    if (!this.has(key)) {
      throw new Error('undefined key')
    }
    const keyHash = this.hash(key)
    delete this.keys[key]
    const bucket = this.buckets[keyHash]
    const value = bucket[key]
    delete bucket[key]
    return value
  }

  /**
   * @param {string} key
   * @return {*}
   */
  public get(key: string): any {
    if (!this.has(key)) {
      throw new Error('undefined key')
    }
    const bucket = this.buckets[this.hash(key)]
    return bucket[key]
  }

  /**
   * @param {string} key
   * @return {boolean}
   */
  public has(key: string): boolean {
    return Object.hasOwnProperty.call(this.keys, key)
  }

  /**
   * @return {string[]}
   */
  public getKeys(): string[] {
    return Object.keys(this.keys)
  }
}

const hashTable = new HashTable()
hashTable.set('CCC', 123)
hashTable.set('DDD', 456)

console.log(hashTable.getKeys())
console.log(hashTable.get('CCC'))
console.log(hashTable.delete('DDD'))
console.log(hashTable.has('DDD'))
console.log(hashTable.getKeys())

export default HashTable
