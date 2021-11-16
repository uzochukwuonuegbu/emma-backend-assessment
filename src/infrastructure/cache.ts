import NodeCache from 'node-cache';


export class Cache {
    cache: NodeCache;
    constructor() {
        this.cache = new NodeCache();
    }
  
    async getAsync(key: string): Promise<string | undefined> {
        return this.cache.get(key);
    }
    async setAsync(key: string, data: string, ttl: number): Promise<boolean> {
        return this.cache.set(key, data, ttl);
      }
  }