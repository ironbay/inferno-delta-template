import './styles.css'
import Delta from "../../data/delta";
import Dynamic from '../../data/dynamic'
import createElement from 'inferno-create-element'
import Component from 'inferno-component'

import Node from '../../components/node'

interface IProps {
	delta: Delta
}

export default class ExamplePage extends Component<IProps, any> {
	constructor() {
		super()
		this.state = {}
	}
	render() {
		console.log(this.props)
		const { delta } = this.props
		return <Node onEdit={this.edit} label='data' path={[]} data={delta.store.get([])} />
	}
	edit = (path: Array<string>, value: any) => {
		this.props.delta.mutation({
			$merge: Dynamic.put({}, path, value)
		})
	}
}
