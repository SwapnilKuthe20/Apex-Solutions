const fs = require('fs');
const path = require('path');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}
const files = walk('./src/components/home');
let totalMatches = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Clean up any double lg:py-20 lg:py-16 etc inside Section classes
  // The easiest is just to remove py- classes from Section className
  // Find <Section ... className="..."
  content = content.replace(/(<Section[^>]*className=["'])([^"']+)(["'])/g, (match, p1, p2, p3) => {
    let newClass = p2.replace(/\b(py-\d+|md:py-\d+|lg:py-\d+)\b/g, '').replace(/\s+/g, ' ').trim();
    return p1 + newClass + p3;
  });
  
  // also fix double mb- and mt- classes like `mb-8 md:mb-10 lg:mb-12 mb-10` which might have occurred
  // or `mb-10 md:mb-14 mb-8` etc. 
  // Let's just fix the bad cascaded replacements:
  content = content.replace(/py-10 md:py-14 lg:py-16 lg:py-20/g, 'py-12 md:py-16'); // just let Section.tsx handle lg:py-20
  content = content.replace(/py-10 md:py-14 lg:py-16/g, 'py-12 md:py-16');
  
  // For mb- and mt- we cascaded too:
  // mb-12 md:mb-16 -> mb-8 md:mb-10
  // and then mb-12 -> mb-10, mb-16 -> mb-12
  // So mb-8 md:mb-10 might have become mb-8 md:mb-10 which is fine.
  
  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Cleaned Section padding in', file);
    totalMatches++;
  }
});
console.log('Total files cleaned:', totalMatches);
