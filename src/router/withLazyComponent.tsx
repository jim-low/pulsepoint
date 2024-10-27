import { Flex, Spinner } from "@radix-ui/themes"
import { Suspense } from "react"

const CenterSpinner = () => {
  return (
    <Flex align="center" justify="center" width="100vw" height="100vh">
      <Spinner />
    </Flex>
  )
}

// @ts-ignore
const withLazyComponent = (Children) => {
	return (
		<Suspense fallback={<CenterSpinner />}>
			<Children />
		</Suspense>
	)
}

export default withLazyComponent
