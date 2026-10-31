// האקדמיה · עולם הסטאז׳רים
// קובץ התוכן של עולם הסטאז׳רים. סמינר חדש: מעתיקים את ה-PDF לתיקייה lectures/interns/ בשם באנגלית בלי רווחים,
// ומוסיפים שורה לקבוצה "סמינרי הסטאז׳רים". סוגי הפריטים מוסברים בראש data/students.js.
LH.audience({
  key: 'i', order: 3,
  t: 'עולם הסטאז׳רים', en: 'INTERNS', icon: 'steth', art: 'theatre',
  desc: 'כל מה שסטאז׳ר צריך בחודש במערך: ללמוד, להיקלט ולעבוד נכון',
  chips: ['סמינרים', 'קליטה וספרון', 'נהלים', 'מצגות'],
  sections: [
    { id: 'seminars', t: 'סמינרים והרצאות', en: 'SEMINARS', icon: 'mic', ill: 'lect', c: '#00967D',
      desc: 'סמינרי הסטאז׳רים של המערך, ומצגות מסבב הסטודנטים שמתאימות גם לסטאז׳רים',
      groups: [
        { t: 'סמינרי הסטאז׳רים', desc: 'נפתחים על כל המסך · מעבר בין שקפים בחצים או בשלט', items: [
          { id: 'sem1', no: 1, t: 'המטופל הכירורגי הדחוף', type: 'pdf', src: 'interns/sem1-urgent-surgical-patient.pdf', pages: 26, kind: 'סמינר 1', icon: 'tr', c: '#DE6A48' },
          { id: 'sem2', no: 2, t: 'סדנת תפירה', type: 'pdf', src: 'interns/sem2-suturing-workshop.pdf', pages: 14, kind: 'סמינר 2', icon: 'sk', c: '#2FB5A5' },
          { id: 'sem3', no: 3, t: 'אפנדיציטיס', type: 'pdf', src: 'interns/sem3-appendicitis.pdf', pages: 25, kind: 'סמינר 3', icon: 'ac', c: '#13A386' },
          { id: 'sem4', no: 4, t: 'שוק, נוזלים ואלקטרוליטים', type: 'pdf', src: 'interns/sem4-shock-fluids-electrolytes.pdf', pages: 31, kind: 'סמינר 4', icon: 'iv', c: '#3AA0C8' }
        ] },
        { t: 'מצגות מסבב הסטודנטים', desc: 'נושאים שהסטאז׳ר פוגש כל יום במחלקה ובמיון', items: [
          { deck: 'admission.html' },
          { deck: 'case-presentation.html' },
          { deck: 'surgical-risk.html' },
          { deck: 'acute-abdomen.html' },
          { deck: 'shock.html' },
          { deck: 'sepsis.html' },
          { deck: 'fluids.html' },
          { deck: 'nutrition.html' },
          { deck: 'complications.html' },
          { deck: 'trauma-intro.html' },
          { deck: 'xray.html' },
          { deck: 'ct.html' },
          { deck: 'suturing.html' },
          { deck: 'iv-workshop.html' },
          { deck: 'breaking-bad-news.html' },
          { deck: 'medicolegal.html' }
        ] }
      ] },
    { id: 'onboard', t: 'קליטה, ספרון ונהלים', en: 'ONBOARDING', icon: 'book', ill: 'bk', c: '#0A6B5A',
      desc: 'ספרון הסטאז׳רים, עבודה נכונה במערך, מדריך הקבלה בטרום ניתוח והמדריך לאפליקציה',
      items: [
        { id: 'booklet', t: 'ספרון הסטאז׳רים', type: 'pdf', src: '../academy/booklet.pdf', pages: 14, kind: 'ספרון', icon: 'bk', c: '#0A6B5A', sub: 'כל מה שצריך לדעת על הסבב במערך' },
        { id: 'work', t: 'עבודה נכונה במערך', type: 'page', src: '../academy/work.html', kind: 'מצגת', icon: 'sh', c: '#13A386', sub: 'היגיינת ידיים, זיהוי מטופל, בטיחות, SBAR וכללי הזהב' },
        { id: 'preop', t: 'טרום ניתוח: הסבר וקבלות לדוגמה', type: 'pdf', src: '../academy/preop.pdf', pages: 5, kind: 'מדריך', icon: 'cl', c: '#9473D0', sub: 'מבנה הקבלה במרפאת טרום ניתוח ושלוש דוגמאות' },
        { id: 'guide', t: 'המדריך לאפליקציה', type: 'page', src: '../academy/guide-interns.html', kind: 'מדריך', icon: 'ph', c: '#4A8FD0', sub: 'דיווח יומי, תוכנית שבועית, תורנויות ובקשות' }
      ] }
  ]
});
