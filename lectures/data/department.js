// האקדמיה · עולם המערך
// קובץ התוכן של עולם המערך. מצגת חדשה: מעתיקים את הקובץ לתיקייה lectures/department/ ומוסיפים פריט לקבוצה, למשל:
//   { id: 'mm-2026-11', t: 'M&M · נובמבר 2026', type: 'pdf', src: 'department/mm-2026-11.pdf', pages: 22 }
// בלי פרטים מזהים של מטופלים. סוגי הפריטים מוסברים בראש data/students.js.
LH.audience({
  key: 'm', order: 1,
  t: 'עולם המערך', en: 'DEPARTMENT', icon: 'hosp', art: 'organs',
  desc: 'החיים האקדמיים של המערך: ישיבות, מקרים, ספרות ומחקר',
  chips: ['ישיבות ו-M&M', 'מועדון ספרות', 'Tumor board', 'חדשות מחקר'],
  sections: [
    { id: 'meetings', t: 'ישיבות ו-M&M', en: 'DEPARTMENT MEETINGS', icon: 'mic', ill: 'lect', c: '#00967D',
      desc: 'M&M, מועדון ספרות וישיבות המערך',
      groups: [
        { t: 'M&M', desc: 'תחלואה ותמותה · דיון במקרים', icon: 'mm', items: [] },
        { t: 'מועדון ספרות', desc: 'מאמרים שהוצגו ודיון', icon: 'jc', items: [] },
        { t: 'ישיבות המערך', desc: 'עדכונים, נהלים ופרויקטים', icon: 'hosp', items: [] }
      ] },
    { id: 'tumor', t: 'Tumor board', en: 'TUMOR BOARD', icon: 'micro', ill: 'tb', c: '#C0608A',
      desc: 'הדיון הרב-תחומי: מצגות ומקרים לדיון',
      groups: [
        { t: 'מקרים לדיון', desc: 'בלי פרטים מזהים של מטופלים', icon: 'tb', items: [] },
        { t: 'הנחיות ופרוטוקולים', desc: 'מסגרת הדיון וההחלטות', icon: 'cl', items: [] }
      ] },
    { id: 'imaging', t: 'רנטגן', en: 'IMAGING ROUND', icon: 'scan', ill: 'xr', c: '#3AA0C8',
      desc: 'ישיבת הדימות עם מכון הדימות',
      groups: [
        { t: 'מקרי דימות', desc: 'CT, אולטרסאונד וצילומים', icon: 'xr', items: [] }
      ] },
    { id: 'research', t: 'חדשות מחקר', en: 'RESEARCH', icon: 'micro', ill: 'jc', c: '#9473D0',
      desc: 'מאמרים חדשים, מחקרים של המערך וכנסים',
      groups: [
        { t: 'מה חדש בספרות', desc: 'מאמרים ועדכונים שכדאי להכיר', icon: 'jc', items: [] },
        { t: 'המחקר במערך', desc: 'פרויקטים, פרסומים והצגות בכנסים', icon: 'sa', items: [] }
      ] },
    { id: 'teach', t: 'הוראה בסבב הסטודנטים', en: 'TEACHING', icon: 'cap', ill: 'cl', c: '#0A6B5A',
      desc: 'המדריכים של אחראי הסטודנטים ושל המרצים בסבב',
      items: [
        { id: 'coordinator', t: 'מדריך לאחראי הסטודנטים', type: 'deck', src: 'coordinator.html', kind: 'מדריך', icon: 'cl', c: '#0A6B5A', sub: 'Scrub In · ניהול הסבב' },
        { id: 'lecturers', t: 'מדריך למרצים', type: 'deck', src: 'lecturers.html', kind: 'מדריך', icon: 'lect', c: '#13A386', sub: 'Scrub In · איך מעבירים הרצאה בסבב' }
      ] },
    { id: 'go-s', type: 'link', href: '#s', t: 'עולם הסטודנטים', en: 'SCRUB IN', icon: 'cap', ill: 'up', c: '#13A386',
      desc: 'מצגות הסבב, סילבוס ופתיחת סבב' },
    { id: 'go-i', type: 'link', href: '#i', t: 'עולם הסטאז׳רים', en: 'INTERNS', icon: 'steth', ill: 'lect', c: '#4A8FD0',
      desc: 'סמינרים, ספרון וקליטה' }
  ]
});
