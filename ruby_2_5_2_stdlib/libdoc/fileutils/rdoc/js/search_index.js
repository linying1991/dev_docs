var search_data = {"index":{"searchIndex":["fileutils","dryrun","entry_","file","nowrite","streamutils_","rbconfig","verbose","cd()","chdir()","chmod()","chmod_r()","chown()","chown_r()","cmp()","collect_method()","commands()","compare_file()","compare_stream()","copy()","copy_entry()","copy_file()","copy_stream()","cp()","cp_lr()","cp_r()","getwd()","have_option?()","identical?()","install()","link()","link_entry()","ln()","ln_s()","ln_sf()","makedirs()","mkdir()","mkdir_p()","mkpath()","move()","mv()","options()","options_of()","pwd()","remove()","remove_dir()","remove_entry()","remove_entry_secure()","remove_file()","rm()","rm_f()","rm_r()","rm_rf()","rmdir()","rmtree()","safe_unlink()","symlink()","touch()","uptodate?()"],"longSearchIndex":["fileutils","fileutils::dryrun","fileutils::entry_","fileutils::entry_::file","fileutils::nowrite","fileutils::streamutils_","fileutils::streamutils_::rbconfig","fileutils::verbose","fileutils::cd()","fileutils::chdir()","fileutils::chmod()","fileutils::chmod_r()","fileutils::chown()","fileutils::chown_r()","fileutils::cmp()","fileutils::collect_method()","fileutils::commands()","fileutils::compare_file()","fileutils::compare_stream()","fileutils::copy()","fileutils::copy_entry()","fileutils::copy_file()","fileutils::copy_stream()","fileutils::cp()","fileutils::cp_lr()","fileutils::cp_r()","fileutils::getwd()","fileutils::have_option?()","fileutils::identical?()","fileutils::install()","fileutils::link()","fileutils::link_entry()","fileutils::ln()","fileutils::ln_s()","fileutils::ln_sf()","fileutils::makedirs()","fileutils::mkdir()","fileutils::mkdir_p()","fileutils::mkpath()","fileutils::move()","fileutils::mv()","fileutils::options()","fileutils::options_of()","fileutils::pwd()","fileutils::remove()","fileutils::remove_dir()","fileutils::remove_entry()","fileutils::remove_entry_secure()","fileutils::remove_file()","fileutils::rm()","fileutils::rm_f()","fileutils::rm_r()","fileutils::rm_rf()","fileutils::rmdir()","fileutils::rmtree()","fileutils::safe_unlink()","fileutils::symlink()","fileutils::touch()","fileutils::uptodate?()"],"info":[["FileUtils","","FileUtils.html","","<p>fileutils.rb\n<p>Copyright © 2000-2007 Minero Aoki\n<p>This program is free software. You can distribute/modify …\n"],["FileUtils::DryRun","","FileUtils/DryRun.html","","<p>This module has all methods of FileUtils module, but never changes\nfiles/directories, with printing message …\n"],["FileUtils::Entry_","","FileUtils/Entry_.html","",""],["FileUtils::Entry_::File","","FileUtils/Entry_/File.html","",""],["FileUtils::NoWrite","","FileUtils/NoWrite.html","","<p>This module has all methods of FileUtils module, but never changes\nfiles/directories.  This equates to …\n"],["FileUtils::StreamUtils_","","FileUtils/StreamUtils_.html","",""],["FileUtils::StreamUtils_::RbConfig","","FileUtils/StreamUtils_/RbConfig.html","",""],["FileUtils::Verbose","","FileUtils/Verbose.html","","<p>This module has all methods of FileUtils module, but it outputs messages\nbefore acting.  This equates …\n"],["cd","FileUtils","FileUtils.html#method-c-cd","(dir, verbose: nil)","<p>Changes the current directory to the directory <code>dir</code>.\n<p>If this method is called with block, resumes to the …\n"],["chdir","FileUtils","FileUtils.html#method-c-chdir","(dir, verbose: nil)",""],["chmod","FileUtils","FileUtils.html#method-c-chmod","(mode, list, noop: nil, verbose: nil)","<p>Changes permission bits on the named files (in <code>list</code>) to the\nbit pattern represented by <code>mode</code>.\n<p><code>mode</code> is the ...\n"],["chmod_R","FileUtils","FileUtils.html#method-c-chmod_R","(mode, list, noop: nil, verbose: nil, force: nil)","<p>Changes permission bits on the named files (in <code>list</code>) to the\nbit pattern represented by <code>mode</code>.\n\n<pre>FileUtils.chmod_R ...</pre>\n"],["chown","FileUtils","FileUtils.html#method-c-chown","(user, group, list, noop: nil, verbose: nil)","<p>Changes owner and group on the named files (in <code>list</code>) to the\nuser <code>user</code> and the group <code>group</code>.  <code>user</code>\nand …\n"],["chown_R","FileUtils","FileUtils.html#method-c-chown_R","(user, group, list, noop: nil, verbose: nil, force: nil)","<p>Changes owner and group on the named files (in <code>list</code>) to the\nuser <code>user</code> and the group <code>group</code> recursively. …\n"],["cmp","FileUtils","FileUtils.html#method-c-cmp","(a, b)",""],["collect_method","FileUtils","FileUtils.html#method-c-collect_method","(opt)","<p>Returns an Array of methods names which have the option <code>opt</code>.\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">p</span> <span class=\"ruby-constant\">FileUtils</span>.<span class=\"ruby-identifier\">collect_method</span>(:<span class=\"ruby-identifier\">preserve</span>) <span class=\"ruby-comment\">#=&gt; ...</span>\n</pre>\n"],["commands","FileUtils","FileUtils.html#method-c-commands","()","<p>Returns an Array of names of high-level methods that accept any keyword\narguments.\n\n<pre>p FileUtils.commands ...</pre>\n"],["compare_file","FileUtils","FileUtils.html#method-c-compare_file","(a, b)","<p>Returns true if the contents of a file <code>a</code> and a file\n<code>b</code> are identical.\n\n<pre>FileUtils.compare_file('somefile', ...</pre>\n"],["compare_stream","FileUtils","FileUtils.html#method-c-compare_stream","(a, b)","<p>Returns true if the contents of a stream <code>a</code> and <code>b</code>\nare identical.\n"],["copy","FileUtils","FileUtils.html#method-c-copy","(src, dest, preserve: nil, noop: nil, verbose: nil)",""],["copy_entry","FileUtils","FileUtils.html#method-c-copy_entry","(src, dest, preserve = false, dereference_root = false, remove_destination = false)","<p>Copies a file system entry <code>src</code> to <code>dest</code>. If\n<code>src</code> is a directory, this method copies its contents\nrecursively. …\n"],["copy_file","FileUtils","FileUtils.html#method-c-copy_file","(src, dest, preserve = false, dereference = true)","<p>Copies file contents of <code>src</code> to <code>dest</code>. Both of\n<code>src</code> and <code>dest</code> must be a path name.\n"],["copy_stream","FileUtils","FileUtils.html#method-c-copy_stream","(src, dest)","<p>Copies stream <code>src</code> to <code>dest</code>. <code>src</code> must\nrespond to #read(n) and <code>dest</code> must respond to #write(str).\n"],["cp","FileUtils","FileUtils.html#method-c-cp","(src, dest, preserve: nil, noop: nil, verbose: nil)","<p>Copies a file content <code>src</code> to <code>dest</code>.  If\n<code>dest</code> is a directory, copies <code>src</code> to\n<code>dest/src</code>.\n<p>If <code>src</code> is a list of …\n"],["cp_lr","FileUtils","FileUtils.html#method-c-cp_lr","(src, dest, noop: nil, verbose: nil, dereference_root: true, remove_destination: false)","<p>Hard link <code>src</code> to <code>dest</code>. If <code>src</code> is a\ndirectory, this method links all its contents recursively. If\n<code>dest</code> …\n"],["cp_r","FileUtils","FileUtils.html#method-c-cp_r","(src, dest, preserve: nil, noop: nil, verbose: nil, dereference_root: true, remove_destination: nil)","<p>Copies <code>src</code> to <code>dest</code>. If <code>src</code> is a\ndirectory, this method copies all its contents recursively. If\n<code>dest</code> is …\n"],["getwd","FileUtils","FileUtils.html#method-c-getwd","()",""],["have_option?","FileUtils","FileUtils.html#method-c-have_option-3F","(mid, opt)","<p>Returns true if the method <code>mid</code> have an option\n<code>opt</code>.\n\n<pre>p FileUtils.have_option?(:cp, :noop)     #=&gt; true\np ...</pre>\n"],["identical?","FileUtils","FileUtils.html#method-c-identical-3F","(a, b)",""],["install","FileUtils","FileUtils.html#method-c-install","(src, dest, mode: nil, owner: nil, group: nil, preserve: nil, noop: nil, verbose: nil)","<p>If <code>src</code> is not same as <code>dest</code>, copies it and changes\nthe permission mode to <code>mode</code>.  If <code>dest</code> is a\ndirectory, …\n"],["link","FileUtils","FileUtils.html#method-c-link","(src, dest, force: nil, noop: nil, verbose: nil)",""],["link_entry","FileUtils","FileUtils.html#method-c-link_entry","(src, dest, dereference_root = false, remove_destination = false)","<p>Hard links a file system entry <code>src</code> to <code>dest</code>. If\n<code>src</code> is a directory, this method links its contents\nrecursively. …\n"],["ln","FileUtils","FileUtils.html#method-c-ln","(src, dest, force: nil, noop: nil, verbose: nil)","<p>In the first form, creates a hard link <code>link</code> which points to\n<code>target</code>. If <code>link</code> already exists, raises\nErrno::EEXIST …\n"],["ln_s","FileUtils","FileUtils.html#method-c-ln_s","(src, dest, force: nil, noop: nil, verbose: nil)","<p>In the first form, creates a symbolic link <code>link</code> which points\nto <code>target</code>. If <code>link</code> already exists, raises …\n"],["ln_sf","FileUtils","FileUtils.html#method-c-ln_sf","(src, dest, noop: nil, verbose: nil)","<p>Same as\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">FileUtils</span>.<span class=\"ruby-identifier\">ln_s</span>(<span class=\"ruby-operator\">*</span><span class=\"ruby-identifier\">args</span>, <span class=\"ruby-identifier\">force</span><span class=\"ruby-operator\">:</span> <span class=\"ruby-keyword\">true</span>)\n</pre>\n"],["makedirs","FileUtils","FileUtils.html#method-c-makedirs","(list, mode: nil, noop: nil, verbose: nil)",""],["mkdir","FileUtils","FileUtils.html#method-c-mkdir","(list, mode: nil, noop: nil, verbose: nil)","<p>Creates one or more directories.\n\n<pre>FileUtils.mkdir 'test'\nFileUtils.mkdir %w(tmp data)\nFileUtils.mkdir 'notexist', ...</pre>\n"],["mkdir_p","FileUtils","FileUtils.html#method-c-mkdir_p","(list, mode: nil, noop: nil, verbose: nil)","<p>Creates a directory and all its parent directories. For example,\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">FileUtils</span>.<span class=\"ruby-identifier\">mkdir_p</span> <span class=\"ruby-string\">'/usr/local/lib/ruby'</span>\n</pre>\n"],["mkpath","FileUtils","FileUtils.html#method-c-mkpath","(list, mode: nil, noop: nil, verbose: nil)",""],["move","FileUtils","FileUtils.html#method-c-move","(src, dest, force: nil, noop: nil, verbose: nil, secure: nil)",""],["mv","FileUtils","FileUtils.html#method-c-mv","(src, dest, force: nil, noop: nil, verbose: nil, secure: nil)","<p>Moves file(s) <code>src</code> to <code>dest</code>.  If <code>file</code>\nand <code>dest</code> exist on the different disk partition, the file is\ncopied …\n"],["options","FileUtils","FileUtils.html#method-c-options","()","<p>Returns an Array of option names.\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">p</span> <span class=\"ruby-constant\">FileUtils</span>.<span class=\"ruby-identifier\">options</span>  <span class=\"ruby-comment\">#=&gt; [&quot;noop&quot;, &quot;force&quot;, &quot;verbose&quot;, &quot;preserve&quot;, &quot;mode&quot;]</span>\n</pre>\n"],["options_of","FileUtils","FileUtils.html#method-c-options_of","(mid)","<p>Returns an Array of option names of the method <code>mid</code>.\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">p</span> <span class=\"ruby-constant\">FileUtils</span>.<span class=\"ruby-identifier\">options_of</span>(:<span class=\"ruby-identifier\">rm</span>)  <span class=\"ruby-comment\">#=&gt; [&quot;noop&quot;, &quot;verbose&quot;, ...</span>\n</pre>\n"],["pwd","FileUtils","FileUtils.html#method-c-pwd","()","<p>Returns the name of the current directory.\n"],["remove","FileUtils","FileUtils.html#method-c-remove","(list, force: nil, noop: nil, verbose: nil)",""],["remove_dir","FileUtils","FileUtils.html#method-c-remove_dir","(path, force = false)","<p>Removes a directory <code>dir</code> and its contents recursively. This\nmethod ignores StandardError if <code>force</code> is true. …\n"],["remove_entry","FileUtils","FileUtils.html#method-c-remove_entry","(path, force = false)","<p>This method removes a file system entry <code>path</code>.\n<code>path</code> might be a regular file, a directory, or something. …\n"],["remove_entry_secure","FileUtils","FileUtils.html#method-c-remove_entry_secure","(path, force = false)","<p>This method removes a file system entry <code>path</code>. \n<code>path</code> shall be a regular file, a directory, or something. …\n"],["remove_file","FileUtils","FileUtils.html#method-c-remove_file","(path, force = false)","<p>Removes a file <code>path</code>. This method ignores StandardError if\n<code>force</code> is true.\n"],["rm","FileUtils","FileUtils.html#method-c-rm","(list, force: nil, noop: nil, verbose: nil)","<p>Remove file(s) specified in <code>list</code>.  This method cannot remove\ndirectories. All StandardErrors are ignored …\n"],["rm_f","FileUtils","FileUtils.html#method-c-rm_f","(list, noop: nil, verbose: nil)","<p>Equivalent to\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">FileUtils</span>.<span class=\"ruby-identifier\">rm</span>(<span class=\"ruby-identifier\">list</span>, <span class=\"ruby-identifier\">force</span><span class=\"ruby-operator\">:</span> <span class=\"ruby-keyword\">true</span>)\n</pre>\n"],["rm_r","FileUtils","FileUtils.html#method-c-rm_r","(list, force: nil, noop: nil, verbose: nil, secure: nil)","<p>remove files <code>list[0]</code> <code>list[1]</code>… If\n<code>list[n]</code> is a directory, removes its all contents recursively.\nThis …\n"],["rm_rf","FileUtils","FileUtils.html#method-c-rm_rf","(list, noop: nil, verbose: nil, secure: nil)","<p>Equivalent to\n\n<pre class=\"ruby\"><span class=\"ruby-constant\">FileUtils</span>.<span class=\"ruby-identifier\">rm_r</span>(<span class=\"ruby-identifier\">list</span>, <span class=\"ruby-identifier\">force</span><span class=\"ruby-operator\">:</span> <span class=\"ruby-keyword\">true</span>)\n</pre>\n<p>WARNING: This method causes local vulnerability. Read the …\n"],["rmdir","FileUtils","FileUtils.html#method-c-rmdir","(list, parents: nil, noop: nil, verbose: nil)","<p>Removes one or more directories.\n\n<pre>FileUtils.rmdir 'somedir'\nFileUtils.rmdir %w(somedir anydir otherdir) ...</pre>\n"],["rmtree","FileUtils","FileUtils.html#method-c-rmtree","(list, noop: nil, verbose: nil, secure: nil)",""],["safe_unlink","FileUtils","FileUtils.html#method-c-safe_unlink","(list, noop: nil, verbose: nil)",""],["symlink","FileUtils","FileUtils.html#method-c-symlink","(src, dest, force: nil, noop: nil, verbose: nil)",""],["touch","FileUtils","FileUtils.html#method-c-touch","(list, noop: nil, verbose: nil, mtime: nil, nocreate: nil)","<p>Updates modification time (mtime) and access time (atime) of file(s) in\n<code>list</code>.  Files are created if they …\n"],["uptodate?","FileUtils","FileUtils.html#method-c-uptodate-3F","(new, old_list)","<p>Returns true if <code>new</code> is newer than all <code>old_list</code>.\nNon-existent files are older than any file.\n\n<pre>FileUtils.uptodate?('hello.o', ...</pre>\n"]]}}