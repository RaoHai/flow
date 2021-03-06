import '../definitions/reactART';
import * as React from 'react';
import { Group, Text, Shape } from 'react-art';
import { getPath } from '../functions';

export default class Link extends React.Component<any, any> {
  render() {
    const { data } = this.props;
    const { source, target } = data;
    const pathId = `link-path-${source.id}-${target.id}`;
    const path = getPath(data);
    return <Group >
      <Shape d={path} stroke="#d9d9d9" strokeWidth={1} />
    </Group>
  }
}
