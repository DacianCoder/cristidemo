import { configure } from '@testing-library/react'
import 'mutationobserver-shim'

configure({ testIdAttribute: 'id' })
