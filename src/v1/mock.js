
export const Categories = [
  'a', // Animal
  'f', // Food
  'h', // Human
  'm', // Medical
  'p', // Plant
  's', // Security
  'v', // Vehicle
]

export const Formats = [
  'yolov7',
]

export const History = {
  '2023-01': [1, 1.00, 'paid'],
  '2023-02': [3455, 8.64, 'paid'],
  '2023-03': [6486, 16.22, 'paid'],
  '2023-04': [7364, 18.41, 'paid'],
  '2023-05': [12465, 31.17, 'paid'],
  '2023-06': [55698, 139.25, 'paid'],
  '2023-07': [92435, 231.09, 'unpaid'],
}

export const Invoices = {
  '2023-01': [1, 1.00, 'paid', 'user1'],
  '2023-02': [3455, 8.64, 'paid', 'user1'],
  '2023-03': [6486, 16.22, 'paid', 'user1'],
  '2023-04': [7364, 18.41, 'paid', 'user1'],
  '2023-05': [12465, 31.17, 'paid', 'user1'],
  '2023-06': [55698, 139.25, 'paid', 'user1'],
  '2023-07': [92435, 231.09, 'unpaid', 'user1'],
}

// The model key will be used to generate the translated name and the value should
// follow the format of:
//    [ $/req, avg. latency ms ]
export const Models = {
  // Human
  'h_age_cl': [0.0025, 500, 'https://placehold.co/640x320?text=cl'],
  'h_body_pe': [0.0025, 750, 'https://placehold.co/640x320?text=pe'],
  'h_emotion_cl': [0.0025, 500, 'https://placehold.co/640x320?text=cl'],
  'h_face_od': [0.0025, 1500, 'https://placehold.co/640x320?text=od'],
  'h_hair_od': [0.0025, 1500, 'https://placehold.co/640x320?text=od'],
  'h_hair_type_cl': [0.0025, 500, 'https://placehold.co/640x320?text=cl'],
  'h_hand_pe': [0.0025, 750, 'https://placehold.co/640x320?text=pe'],
  // Vehicle
  'v_damage_od': [0.0025, 1500, 'https://placehold.co/640x320?text=od'],
  'v_dashboard_od': [0.0025, 1500, 'https://placehold.co/640x320?text=od'],
  'v_odometer_digits_od': [0.0025, 1500, 'https://placehold.co/640x320?text=od'],
  'v_plate_od': [0.0025, 1500, 'https://placehold.co/640x320?text=od'],
  'v_plate_digits_od': [0.0025, 1500, 'https://placehold.co/640x320?text=od'],
  'v_side_cl': [0.0025, 500, 'https://placehold.co/640x320?text=cl'],
  'v_type_cl': [0.0025, 500, 'https://placehold.co/640x320?text=cl'],
}

export const Tax = 0.00

export const Tickets = {
  '1111111': {
    id: '1111111',
    status: 'open',
    title: 'Slow response time XXXX api',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor mauris, dapibus in risus id, viverra dapibus sem. Nulla commodo, ligula ut pellentesque pharetra, elit justo placerat erat, sit amet volutpat libero tellus a sem. Mauris ornare dignissim orci, id interdum enim tincidunt sit amet. Fusce pulvinar posuere nibh, at malesuada felis cursus eu. Aenean eu cursus odio. Praesent ut euismod massa. Quisque in viverra sapien. Phasellus massa sem, auctor id enim auctor, elementum hendrerit tellus. Praesent enim dui, porta quis sem sit amet, pulvinar pellentesque dui. Maecenas suscipit tellus lorem, eget faucibus justo condimentum sit amet. In eget rutrum nisi, nec tempor tortor. Vestibulum sit amet ornare leo. Proin libero tortor, tincidunt ac commodo eu, laoreet et leo. Vivamus suscipit, sem vel condimentum euismod, leo orci dictum ligula, efficitur aliquam leo arcu id metus.',
  },
  '2222222': {
    id: '2222222',
    status: 'close',
    title: 'Having trouble getting a response back',
    body: 'Fusce dignissim pellentesque eros, eget commodo orci pulvinar non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed rhoncus ut elit ut faucibus. Donec ultrices massa sit amet nunc maximus, quis placerat augue ultricies. Curabitur maximus rutrum purus, vitae venenatis ipsum sollicitudin a. In malesuada ipsum ac leo egestas posuere. In interdum magna ac lectus sagittis, eu gravida libero pharetra. Maecenas non fermentum purus. Nunc nibh urna, ullamcorper quis laoreet a, venenatis et urna. Etiam venenatis imperdiet nibh, non vulputate augue pretium in. Proin dignissim erat sed tellus hendrerit suscipit. Phasellus non bibendum sem. Aenean ac sapien nulla. Aenean lacinia auctor purus, eget efficitur enim dapibus sed.',
  },
}

export const Types = [
  'cl', // Classification
  'di', // Diffusion
  'ln', // Language
  'od', // Object Detection
  'pe', // Pose Estimation
  'se', // Segmentation
]

export const User = {
  id: '1',

  name: function() {
    return `${this.fname} ${this.lname}`
  },
  fname: 'John',
  lname: 'Doe',

  key: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',

  language: 'en',

  city: 'North Star',
  state: 'The Aether',
  street1: '123 Rainbow Lane',
  street2: 'Cloud 9',
  zip: '77777',

  month: '07',
  pan: '4444-2222-4444-2222',
  year: '2023',
}

export default {
  Categories,
  Formats,
  History,
  Invoices,
  Models,
  Tax,
  Tickets,
  Types,
}
