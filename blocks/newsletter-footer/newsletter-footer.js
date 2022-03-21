/* eslint-disable import/named, import/extensions */

import {
} from '../../scripts/scripts.js';
import createTag from '../gnav/gnav-utils.js';

export default async function decorate($block) {
    const $links = $block.querySelectorAll('a');

    $links.forEach(($link) => {
        if ($link.href.match('newsletter-modal')) {
            $link.classList.add('newsletter-footer-cta');
        }
    });

    const $close = createTag('a', { class: 'newsletter-footer-close' });
    const $closeIcon = createTag('img', { src: '/blocks/newsletter-footer/close.svg' });

    $close.addEventListener('click', (e) => {
        $block.remove();
    });

    $close.append($closeIcon);
    $block.append($close);

    return $block;
}
