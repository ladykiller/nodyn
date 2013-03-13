load('vertx.js');
load('vertx_tests.js');

function testProcessObject() {
  vassert.assertNotNull(process);
  vassert.assertEquals('object', typeof process);
  vassert.testComplete();
}

function testStdOut() {
  vassert.assertNotNull(process.stdout);
  process.stdout.write("A message to stdout");
  vassert.testComplete();
}

function testStdErr() {
  vassert.assertEquals(typeof process.stderr, 'object');
  process.stderr.write("A message to stderr");
  vassert.testComplete();
}

function testVersion() {
  vassert.assertEquals(org.projectodd.nodej.Node.VERSION, process.version);
  vassert.assertNotNull(process.versions);
  vassert.assertEquals(org.projectodd.nodej.Node.VERSION, process.versions.node);
  vassert.assertEquals(java.lang.System.getProperty("java.version"), process.versions.java);
  vassert.assertEquals(org.dynjs.DynJSVersion.FULL, process.versions.dynjs);
  vassert.testComplete();
}

function testExecPath() {
  vassert.assertEquals(java.lang.System.getProperty('user.dir'), process.execPath);
  vassert.testComplete();
}

function testArch() {
  vassert.assertEquals('java', process.arch);
  vassert.testComplete();
}

function testPlatform() {
  vassert.assertEquals('java', process.platform);
  vassert.testComplete();
}

function testProcessEvents() {
  vassert.assertEquals('function', typeof process.addListener);
  vassert.testComplete();
}

function testProcessEnv() {
  vassert.assertEquals('object', typeof process.env);
  // Make sure we have a tmp dir property
  tmpDir = java.lang.System.getProperty("java.io.tmpdir");
  vassert.assertEquals(tmpDir, process.env.TMPDIR);
  vassert.assertEquals(tmpDir, process.env.TEMP);
  vassert.assertEquals(tmpDir, process.env.TMP);
  vassert.testComplete();
}

function testCWD() {
  vassert.assertEquals(java.lang.System.getProperty('user.dir'), process.cwd());
  vassert.testComplete();
}

function testPID() {
  vassert.assertEquals(java.lang.management.ManagementFactory.getRuntimeMXBean().getName(), process.pid);
  vassert.testComplete();
}

function testTitle() {
  vassert.assertEquals('NodeJ', process.title);
  vassert.testComplete();
}

function testUndocumentedProperties() {
  vassert.assertFalse(process.noDeprecation);
  vassert.assertFalse(process.traceDeprecation);
  vassert.testComplete();
}

initTests(this);
