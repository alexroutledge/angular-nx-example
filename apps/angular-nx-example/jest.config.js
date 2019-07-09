module.exports = {
  name: 'angular-nx-example',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-nx-example',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
