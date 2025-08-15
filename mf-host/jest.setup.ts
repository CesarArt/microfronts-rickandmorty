import '@testing-library/jest-dom';

// Polyfill TextEncoder/TextDecoder for Jest
import { TextEncoder, TextDecoder } from 'util';
if (typeof globalThis.TextEncoder === 'undefined') {
	// @ts-expect-error: Polyfill for missing TextEncoder in Jest environment
	globalThis.TextEncoder = TextEncoder;
}
if (typeof globalThis.TextDecoder === 'undefined') {
	// @ts-expect-error: Polyfill for missing TextDecoder in Jest environment
	globalThis.TextDecoder = TextDecoder;
}
