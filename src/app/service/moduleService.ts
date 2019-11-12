import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

export class Module {
  constructor(
    public code: string,
    public name: string,
    public duration: number,
    public topics: string[],
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  

  constructor(private httpClient: HttpClient) { }
  
  
  getModules() {
    console.log("test call");
    
    return this.httpClient.get<Module[]>('http://localhost:8079/modules');
  }

  public deleteModule(m) {
    return this.httpClient.delete<Module>("http://localhost:8079/modules" + "/" + m.code);
  }

  public createModule(m) {
    return this.httpClient.post<Module>("http://localhost:8079/modules", m);
  }

  

  public editModule(m){
    return this.httpClient.put<Module>("http://localhost:8079/modules" + "/",m.id);
  }
}
