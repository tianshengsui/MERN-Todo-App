import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';

const CompletedButton = ({completed}) => {
    return ( 
        <Tooltip title="Mark as completed" arrow>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={completed}
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
        </Tooltip>
     );
}
 
export default CompletedButton;