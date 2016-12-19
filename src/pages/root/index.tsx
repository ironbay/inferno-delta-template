import './reset.css'
import './styles.css'
import './reset.css'
import { DELTA_URL } from '../../constants'
import * as createElement from 'inferno-create-element'
import * as Component from 'inferno-component'
import * as Inferno from 'inferno'
import * as Interceptor from '../../data/interceptors'
import { history } from '../../routes'
import Delta from '../../data/delta'
import Container from '../../components/container'

interface IRootProps {
	children: any
	params: any
}

export default class Root extends Component<IRootProps, any> {
	private _delta: Delta
	constructor() {
		super()
		this.state = {}
	}
	async componentWillMount() {
		const delta = new Delta(DELTA_URL)
		this._delta = delta
		Interceptor.bind(delta)
	}
	componentDidMount() {
		this._delta.store.changed(debounce(() => {
			console.log('Rendering')
			this.forceUpdate()
		}, 100))
		this.componentWillReceiveProps(this.props)
	}
	componentWillReceiveProps(next: IRootProps) {
		this._delta.store.put(['url', 'params'], next.params)
	}
	render() {
		const { children, params } = this.props
		if (this._delta.store.get(['connection']) === 'unknown')
			return false
		return (
			<Container className='root'>
			{
				Inferno.createVNode(5, children.props.component, {
					history,
					delta: this._delta,
				}, null)
			}
			</Container>
		)
	}
}

function debounce(func: Function, wait: number, immediate?: boolean): () => void {
	let timeout: number;
	return function() {
		let context = this,
		args = arguments,
		later = (): void => {
			timeout = null;
			if (!immediate) {
				func.apply(context, args);
			}
		},
		callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) {
		    func.apply(context, args);
		}
	}
}
