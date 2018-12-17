import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DogsService {
    constructor(private readonly httpSvc: HttpService) {}

    hi(): Observable<AxiosResponse<any>> {
        return this.httpSvc
        .get('https://dog.ceo/api/breeds/image/random')
        .pipe(
            map(res => res.data)
        );
    }
}
