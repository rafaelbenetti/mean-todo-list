import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { TodoService } from './todo.service';
import { environment } from 'src/environments/environment';

describe('TodoService (isolated)', () => {
  let httpTestingController: HttpTestingController;
  let service: TodoService;

  const url = `${environment.url}/todos`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodoService]
    }).compileComponents();
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call todos resource with GET method', () => {
    service.get().subscribe();

    const request = httpTestingController.expectOne(url);
    request.flush([]);

    expect(request.request.method).toBe('GET');
    httpTestingController.verify();
  });

  it('should call todos resource with PUT method', () => {
    const item = {
      _id: 'aaaa',
      title: 'I have to clean the house',
      completed: false
    };

    service.update(item).subscribe();

    const request = httpTestingController.expectOne(url);
    request.flush([]);

    expect(request.request.method).toBe('PUT');
    httpTestingController.verify();
  });

  it('should call todos resource with DELETE method', () => {
    const itemId = '55';
    service.delete(itemId).subscribe();

    const request = httpTestingController.expectOne(`${url}/${itemId}`);
    request.flush([]);

    expect(request.request.method).toBe('DELETE');
    httpTestingController.verify();
  });
});
