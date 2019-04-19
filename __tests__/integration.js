/*
Things we need to do here:

- Check HTML entities like &amp;, &sol;/&bsol;, some that use code points.
- Check typical block tags like <p> and <div>.
- Check <br /> tags.
- Check collapsing whitespace
- Check that inline tags with no extra whitespace DO collapse
- Check that empty inline tags don't add whitespace but empty block tags do.
*/

const convert = require('../html-to-single-line-text');

test('<br /> tag collapses to whitespace', () => {
    expect(convert('Here is a title<br />here is a subtitle')).toBe('Here is a title here is a subtitle');
});
