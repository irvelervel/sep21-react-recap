import { Component } from "react"

class Results extends Component {

    state = {
        resources: []
    }

    getResourceData = async () => {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/' + this.props.selectedResource)
            if (response.ok) {
                let data = await response.json()
                console.log(data)
                this.setState({
                    resources: data
                })
            } else {
                console.log('error happened in the fetching process!')
            }
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount = () => {
        this.getResourceData()
    }

    componentDidUpdate = (prevProps) => {
        // we need to limit the execution of getResourceData to just when the selectedResource
        // prop is changing! because setting the state will also fire componentDidUpdate
        if (prevProps.selectedResource !== this.props.selectedResource) {
            // this will be entered just if a new value in the dropdown,
            // just is selectedResource has changed
            this.getResourceData()
        }
    }

    // useEffect(() => {
    //     getResourceData()
    // }, [selectedResource])

    render() {
        return (
            <div>
                <h2>FETCH RESULTS</h2>
                {/* here come the results */}
                <ul>
                    {
                        this.state.resources.slice(0, 15).map(r => (
                            <li key={r.id}>{r.name || r.title}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Results

// const Results = ({ selectedResource }) => {

//     const [resources, setResources] = useState([])

//     const getResourceData = async () => {
//         try {
//             let response = await fetch('https://jsonplaceholder.typicode.com/' + selectedResource)
//             if (response.ok) {
//                 let data = await response.json()
//                 console.log(data)
//                 setResources(data)
//             } else {
//                 console.log('error happened in the fetching process!')
//             }
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     useEffect(() => {
//         getResourceData()
//     }, [selectedResource])

//     return (
//         <div>
//             <h2>FETCH RESULTS</h2>
//             {/* here come the results */}
//             <ul>
//                 {
//                     resources.slice(0, 15).map(r => (
//                         <li key={r.id}>{r.name || r.title}</li>
//                     ))
//                 }
//             </ul>
//         </div>
//     )
// }

// export default Results