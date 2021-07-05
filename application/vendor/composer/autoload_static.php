<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit004aa121afb41db12f105faa8593e718
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit004aa121afb41db12f105faa8593e718::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit004aa121afb41db12f105faa8593e718::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit004aa121afb41db12f105faa8593e718::$classMap;

        }, null, ClassLoader::class);
    }
}
