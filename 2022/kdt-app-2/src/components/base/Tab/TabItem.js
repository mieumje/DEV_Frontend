import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Text from '../Text/Text';

const TabItemWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 60px;
  background-color: ${({active}) => active ? '#ddf' : '#eee'};
`;

const TabItem = ({ title, index, active, __TYPE, ...props}) => {
  return (
    <TabItemWrapper active={active} {...props}>
      <Text strong={active}>{title}</Text>
    </TabItemWrapper>
  );
};

TabItem.defaultProps = {
  __TYPE: 'Tab.Item'
}

TabItem.propTypes = {
  __TYPE: PropTypes.oneOf(['Tab.Item'])
}

export default TabItem;