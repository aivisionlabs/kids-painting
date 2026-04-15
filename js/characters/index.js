/**
 * Character Registry
 *
 * To add a new character:
 * 1. Add the character object to the appropriate category file (animals.js, vehicles.js, fantasy.js)
 *    or create a new category file.
 * 2. Import and spread it into the `allCharacters` array below.
 * 3. If you added a new category, also add it to the `categories` array.
 *
 * Each character needs: { id, name, emoji, category, steps[] }
 * Each step needs: { text, voice, draw(ctx, t) }  where t goes from 0 to 1 during animation.
 */

import { animals } from './animals.js';
import { vehicles } from './vehicles.js';
import { fantasy } from './fantasy.js';
import { cartoon } from './cartoon.js';

export const allCharacters = [...animals, ...vehicles, ...fantasy, ...cartoon];

export const categories = [
    { id: 'all', label: 'All' },
    { id: 'animals', label: 'Animals' },
    { id: 'vehicles', label: 'Vehicles' },
    { id: 'fantasy', label: 'Fantasy & Space' },
    { id: 'cartoon', label: 'Cartoon' },
];

export function getCharacter(id) {
    return allCharacters.find(c => c.id === id);
}

export function getByCategory(categoryId) {
    if (categoryId === 'all') return allCharacters;
    return allCharacters.filter(c => c.category === categoryId);
}
