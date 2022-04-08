import createTag from '../gnav/gnav-utils.js';

export default function decorate($block) {
  const $rows = Array.from($block.children);

  $rows.forEach(($row) => {
    const $columns = Array.from($row.children);
    const $image = $columns[0].querySelector('img');
    const link = $columns[0].querySelector('a').href;
    const $icon = createTag('img', { src: '/blocks/blades/link-icon.svg' });
    const $link = createTag('a', { href: link, target: '_blank', rel: 'noopener' });

    $row.classList.add('blades-row');

    $columns[0].innerHTML = '';
    $columns[0].append($image);
    $columns[0].classList.add('blades-image');
    $columns[1].classList.add('blades-content');
    $columns[1].querySelector('h2').append($icon);

    $link.append($row);
    $block.append($link);
  });
}
