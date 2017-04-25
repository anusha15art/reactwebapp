 var _reactDisplayName = require("react-display-name");

 var _reactDisplayName2 = _interopRequireDefault(_reactDisplayName);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

 var _react = require("react");

 var _react2 = _interopRequireDefault(_react);
 var _constants = require("./constants");

 function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global google */
 function withGoogleMap(WrappedComponent) {
   var _class, _temp2;
 function withGoogleMap(WrappedComponent) {
     };
     return Container;
   }(_react.Component), _class.displayName = "withGoogleMap(" + (0, _reactDisplayName2.default)(WrappedComponent) + ")", _class.propTypes = {
    containerElement: _react.PropTypes.node.isRequired,
    mapElement: _react.PropTypes.node.isRequired
  }, _class.childContextTypes = (0, _defineProperty3.default)({}, _constants.MAP, _react.PropTypes.object), _temp2;
} /* global google */
    containerElement: _propTypes2.default.node.isRequired,
    mapElement: _propTypes2.default.node.isRequired
  }, _class.childContextTypes = (0, _defineProperty3.default)({}, _constants.MAP, _propTypes2.default.object), _temp2;
}
