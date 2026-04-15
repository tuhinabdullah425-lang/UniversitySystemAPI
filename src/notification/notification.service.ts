import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { EnrollmentService } from '../enrollment/enrollment.service';

@Injectable()
export class NotificationService {
  constructor(
    @Inject(forwardRef(() => EnrollmentService))
    private enrollmentService: EnrollmentService,
  ) {}

  sendNotification(studentName: string, message: string) {
    return {
      message: 'Notification sent',
      studentName,
      text: message,
    };
  }

  checkEnrollmentAndNotify(studentName: string, courseId: string) {
    const data = this.enrollmentService.getEnrollments();

    return {
      studentName,
      courseId,
      enrollmentData: data,
    };
  }
}