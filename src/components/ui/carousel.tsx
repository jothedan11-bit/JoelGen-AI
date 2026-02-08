import * as React from "react"
import { 
  View, 
  FlatList, 
  TouchableOpacity, 
  Dimensions, 
  StyleSheet 
} from "react-native"
import { ArrowLeft, ArrowRight } from "lucide-react-native"

const { width: SCREEN_WIDTH } = Dimensions.get("window")

const CarouselContext = React.createContext<any>(null)

const Carousel = ({ children, orientation = "horizontal" }: any) => {
  const flatListRef = React.useRef<FlatList>(null)
  
  const scrollPrev = () => {
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true })
  }

  const scrollNext = () => {
    // Basic native scroll logic
    flatListRef.current?.scrollToEnd({ animated: true })
  }

  return (
    <CarouselContext.Provider value={{ flatListRef, scrollPrev, scrollNext, orientation }}>
      <View style={styles.container}>{children}</View>
    </CarouselContext.Provider>
  )
}

const CarouselContent = ({ children }: any) => {
  const { flatListRef, orientation } = React.useContext(CarouselContext)
  
  return (
    <FlatList
      ref={flatListRef}
      data={React.Children.toArray(children)}
      horizontal={orientation === "horizontal"}
      keyExtractor={(_, index) => index.toString()}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }: any) => item}
    />
  )
}

const CarouselItem = ({ children }: any) => (
  <View style={styles.item}>{children}</View>
)

const CarouselPrevious = () => {
  const { scrollPrev } = React.useContext(CarouselContext)
  return (
    <TouchableOpacity onPress={scrollPrev} style={[styles.navButton, { left: 10 }]}>
      <ArrowLeft size={20} color="#fff" />
    </TouchableOpacity>
  )
}

const CarouselNext = () => {
  const { scrollNext } = React.useContext(CarouselContext)
  return (
    <TouchableOpacity onPress={scrollNext} style={[styles.navButton, { right: 10 }]}>
      <ArrowRight size={20} color="#fff" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: { position: 'relative', width: '100%' },
  item: { width: SCREEN_WIDTH, justifyContent: 'center', alignItems: 'center' },
  navButton: {
    position: 'absolute',
    top: '50%',
    marginTop: -20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 10,
    zIndex: 10
  }
})

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext }