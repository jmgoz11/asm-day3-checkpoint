import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { courseCommands, courseDocuments } from '../actions/courses.actions';
import { map, switchMap } from 'rxjs';
import { CourseEntity } from '../reducers/courses.reducer';

import { environment } from 'src/environments/environment'; // classroom BS code.
@Injectable()
export class CoursesDataEffects {
  readonly baseUrl = environment.coursesUrl + 'courses';
  loadTheCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(courseCommands.load),
      switchMap(() =>
        this.client
          .get<{ data: CourseEntity[] }>(this.baseUrl)
          .pipe(map(({ data }) => courseDocuments.courses({ payload: data })))
      )
    );
  });
  // when we get the command to load the courses,
  // make an HTTP call, get the courses, and return
  // a courses document

  constructor(private actions$: Actions, private client: HttpClient) {}
}
