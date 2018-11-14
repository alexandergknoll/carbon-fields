/**
 * External dependencies.
 */
import { addFilter } from '@wordpress/hooks';

/**
 * The internal dependencies.
 */
import './style.scss';
import withField from '../../components/with-field';

addFilter( 'carbon-fields.textarea-field.metabox', 'carbon-fields/metaboxes', ( OriginalTextareaField ) => withField( OriginalTextareaField ) );
