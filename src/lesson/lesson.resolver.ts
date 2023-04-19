import { Resolver, Query } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver(LessonType)
export class LessonResolver {
  @Query((returns) => LessonType)
  lesson() {
    return {
      id: 'abndhdf',
      name: 'Physics Class',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}
