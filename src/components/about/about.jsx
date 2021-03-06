import React, {Component} from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import './about.css';


class DesignComponent extends Component {

    render() {
        return (
          <div className="design">
            <p className="headline">About Me:</p>
            <p className="text-justify">
            Here to create, fix, build, and do what I love.
            </p>

              <div className="design-checkbox">
                <Checkbox
                  checkedIcon={<ActionFavorite />}
                  uncheckedIcon={<ActionFavoriteBorder />}
                  iconStyle={{"fill":"indianred"}}
                  label="Github"
                />
              </div>
              <div className="design-checkbox">
              <Checkbox
                checkedIcon={<ActionFavorite />}
                uncheckedIcon={<ActionFavoriteBorder />}
                iconStyle={{"fill":"indianred"}}
                label="LinkedIn"
              />
            </div>
            <div className="design-checkbox">
              <Checkbox
                checkedIcon={<ActionFavorite />}
                uncheckedIcon={<ActionFavoriteBorder />}
                iconStyle={{"fill":"indianred"}}
                label="Instagram"
              />
        </div>

          </div>
        );
    }
}

export default DesignComponent;
