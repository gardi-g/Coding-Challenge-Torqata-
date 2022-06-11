import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { RestService } from './rest.service';

describe('RestService', () => {
  let service: RestService;
  let httpMock: HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [
      HttpClientTestingModule
    ],
    providers:[
      RestService
    ]
  });
    service = TestBed.inject(RestService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return a user result', () =>{
    service.getPlayers().subscribe(result => {
      expect(result).toBeTruthy();
      expect(result.length).toEqual(55)
      console.log('result verified');
    });
  })
});
