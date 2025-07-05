import type { Course } from '@/data/rptos';
import { cn } from '@/utils/cn';

type CourseCardProps = {
  course: Course;
  className?: string;
};

export function CourseCard({ course, className }: CourseCardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border bg-card p-4 text-card-foreground shadow-sm',
        className,
      )}
    >
      <h4 className="text-base font-semibold tracking-tight">{course.name}</h4>
      <p className="text-sm text-muted-foreground">
        Duration:
        {course.duration}
      </p>
      <p className="mt-2 text-sm">{course.description}</p>
    </div>
  );
}
