import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {

    constructor(public http:Http) {

    }

    getBuildings() {
        return this.http.get('/api/buildings')
            .pipe(map( res => res.json()));
    }

    sendMail(feedback) {
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');    
        let myParams = new URLSearchParams();
        myParams.append('feedback', feedback);    
        let options = new RequestOptions({ headers: myHeaders, params: myParams });
        
        return this.http.post('/api/mail', {params: {feedback: feedback}}).pipe(map( res => res.json()));
    }
    
    getRooms(id) {
    	let myHeaders = new Headers();
    	myHeaders.append('Content-Type', 'application/json');    
    	let myParams = new URLSearchParams();
    	myParams.append('buildingID', id);	
    	let options = new RequestOptions({ headers: myHeaders, params: myParams });
    	
        return this.http.get('api/rooms', {params: {buildingID: id}})
            .pipe(map( res => res.json()));
    }

    getCourses(roomID) {
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');    
        let myParams = new URLSearchParams();
        myParams.append('roomID', roomID);    
        let options = new RequestOptions({ headers: myHeaders, params: myParams });
        
        return this.http.get('api/courses', {params: {roomID: roomID}})
            .pipe(map( res => res.json()));
    }
}
