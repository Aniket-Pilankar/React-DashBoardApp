1. useMemo

<!-- here course is an object, but course comes from useSelector so we can use it as dependencies -->

```
  const canDeleteStudent = useMemo(() => canModifyCourseEnrollments(course), [course]);

```
