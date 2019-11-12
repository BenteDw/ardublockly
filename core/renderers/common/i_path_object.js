/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview The interface for an object that owns a block's rendering SVG
 * elements.
 * @author fenichel@google.com (Rachel Fenichel)
 */

'use strict';

goog.provide('Blockly.blockRendering.IPathObject');

goog.requireType('Blockly.blockRendering.ConstantProvider');
goog.requireType('Blockly.Theme');


/**
 * An interface for a block's path object.
 * @param {!SVGElement} _root The root SVG element.
 * @param {!Blockly.blockRendering.ConstantProvider} _constants The renderer's
 *     constants.
 * @interface
 */
Blockly.blockRendering.IPathObject = function(_root, _constants) {};

/**
 * Set the path generated by the renderer onto the respective SVG element.
 * @param {string} pathString The path.
 * @package
 */
Blockly.blockRendering.IPathObject.prototype.setPath;

/**
 * Apply the stored colours to the block's path, taking into account whether
 * the paths belong to a shadow block.
 * @param {boolean} isShadow True if the block is a shadow block.
 * @package
 */
Blockly.blockRendering.IPathObject.prototype.applyColour;

/**
 * Update the style.
 * @param {!Blockly.Theme.BlockStyle} blockStyle The block style to use.
 * @package
 */
Blockly.blockRendering.IPathObject.prototype.setStyle;

/**
 * Flip the SVG paths in RTL.
 * @package
 */
Blockly.blockRendering.IPathObject.prototype.flipRTL;

/**
 * Set whether the block shows a highlight or not.  Block highlighting is
 * often used to visually mark blocks currently being executed.
 * @param {boolean} highlighted True if highlighted.
 * @package
 */
Blockly.blockRendering.IPathObject.prototype.updateHighlighted;

/**
 * Set whether the block shows a disable pattern or not.
 * @param {boolean} disabled True if disabled.
 * @param {boolean} isShadow True if the block is a shadow block.
 * @package
 */
Blockly.blockRendering.IPathObject.prototype.updateDisabled;

/**
 * Add or remove styling showing that a block is selected.
 * @param {boolean} enable True if selection is enabled, false otherwise.
 * @package
 */
Blockly.blockRendering.IPathObject.prototype.updateSelected;

/**
 * Add or remove styling showing that a block is dragged over a delete area.
 * @param {boolean} enable True if the block is being dragged over a delete
 *     area, false otherwise.
 * @package
 */
Blockly.blockRendering.IPathObject.prototype.updateDraggingDelete;

/**
 * Add or remove styling showing that a block is an insertion marker.
 * @param {boolean} enable True if the block is an insertion marker, false
 *     otherwise.
 * @package
 */
Blockly.blockRendering.IPathObject.prototype.updateInsertionMarker;

/**
 * Add or remove styling showing that a block is movable.
 * @param {boolean} enable True if the block is movable, false otherwise.
 * @package
 */
Blockly.blockRendering.IPathObject.prototype.updateMovable;

/**
 * Add or remove styling that shows that if the dragging block is dropped, this
 * block will be replaced.  If a shadow block, it will disappear.  Otherwise it
 * will bump.
 * @param {boolean} enable True if styling should be added.
 * @package
 */
Blockly.blockRendering.IPathObject.prototype.updateReplacementHighlight;
