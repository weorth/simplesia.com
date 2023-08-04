
import LottieAnimation from '@/components/animations/LottieAnimation.vue'

import FlatButton from '@/components/clickable/FlatButton.vue'
import IconButton from '@/components/clickable/IconButton.vue'
import LinkButton from '@/components/clickable/LinkButton.vue'

import CodeBlock from '@/components/embeds/CodeBlock.vue'

import LineGraph from '@/components/graphs/LineGraph.vue'

import InputFactory from '@/components/inputs/InputFactory.vue'
import SelectInput from '@/components/inputs/SelectInput.vue'
import TextareaInput from '@/components/inputs/TextareaInput.vue'
import TextInput from '@/components/inputs/TextInput.vue'

import AppError from '@/components/AppError.vue'
import AppLoading from '@/components/AppLoading.vue'
import AppLogo from '@/components/AppLogo.vue'
import AppSuccess from '@/components/AppSuccess.vue'
import TitleBar from '@/components/TitleBar.vue'

export default {
  'lottie-animation': LottieAnimation,

  'flat-button': FlatButton,
  'icon-button': IconButton,
  'link-button': LinkButton,

  'code-block': CodeBlock,

  'line-graph': LineGraph,

  'input-factory': InputFactory,
  'select-input': SelectInput,
  'textarea-input': TextareaInput,
  'text-input': TextInput,

  'app-error': AppError,
  'app-loading': AppLoading,
  'app-logo': AppLogo,
  'app-success': AppSuccess,
  'title-bar': TitleBar,
}
