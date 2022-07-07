import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CourseEntity } from '../reducers/courses.reducer';

export const courseEvents = createActionGroup({
  source: 'Courses Events',
  events: {},
});

export const courseCommands = createActionGroup({
  source: 'Courses Commands',
  events: {
    load: emptyProps(),
  },
});

export const courseDocuments = createActionGroup({
  source: 'Course Documents',
  events: {
    courses: props<{ payload: CourseEntity[] }>(),
  },
});
