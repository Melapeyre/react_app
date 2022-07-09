import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import { swaggerSpec } from './swaggerspec.js';

function DocsPage() {
	return <SwaggerUI spec={swaggerSpec} />
}

export default DocsPage;