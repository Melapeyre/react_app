import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import { swaggerSpec } from './swagger_spec.js';

function App() {
	return <SwaggerUI spec={swaggerSpec} />
}

export default App;