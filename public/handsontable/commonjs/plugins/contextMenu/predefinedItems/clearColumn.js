"use strict";

exports.__esModule = true;
exports.default = clearColumnItem;
exports.KEY = void 0;

var _utils = require("./../utils");

var C = _interopRequireWildcard(require("./../../../i18n/constants"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var KEY = 'clear_column';
exports.KEY = KEY;

function clearColumnItem() {
  return {
    key: KEY,
    name: function name() {
      return this.getTranslatedPhrase(C.CONTEXTMENU_ITEMS_CLEAR_COLUMN);
    },
    callback: function callback(key, selection) {
      var column = selection[0].start.col;

      if (this.countRows()) {
        this.populateFromArray(0, column, [[null]], Math.max(selection[0].start.row, selection[0].end.row), column, 'ContextMenu.clearColumn');
      }
    },
    disabled: function disabled() {
      var selected = (0, _utils.getValidSelection)(this);

      if (!selected) {
        return true;
      }

      var _selected$ = _slicedToArray(selected[0], 3),
          startRow = _selected$[0],
          startColumn = _selected$[1],
          endRow = _selected$[2];

      var entireRowSelection = [startRow, 0, endRow, this.countCols() - 1];
      var rowSelected = entireRowSelection.join(',') === selected.join(',');
      return startColumn < 0 || this.countCols() >= this.getSettings().maxCols || rowSelected;
    }
  };
}