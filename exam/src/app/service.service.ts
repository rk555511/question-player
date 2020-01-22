import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //constructor() { }
  async random() {
    const resp = await fetch('http://localhost/test1/test9.php?task=all');
    const data = await resp.json();
    return data;
  }

  async verifyAnswer(ques,ans) {
    const resp = await fetch('http://localhost/test1/test9.php?task=check&question='+ques+'&answer='+ans);
    const data = await resp.json();
    return data;
  }
}
